import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

class AuthService {
  private static token: string | null = null;

  static async login(email: string, password: string): Promise<void> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();

      this.token = token;
      sessionStorage.setItem("token", token);
      return;
    } catch (error: any) {
      throw new Error(error?.message || 'Login failed');
    }
  }

  static getToken(): string | null {
    return this.token || sessionStorage.getItem("token");
  }

  static logout(): void {
    this.token = null;
    sessionStorage.removeItem("token");
  }

  static isLoggedIn(): boolean {
    const token = this.token || sessionStorage.getItem("token");
    return !!token;
  }

  static initAuthListener() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        this.token = token;
        sessionStorage.setItem("token", token);
      } else {
        this.logout();
      }
    });
  }
}

export default AuthService;
