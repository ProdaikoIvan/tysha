import { ICustomListItem } from "../../types/custom-list.type"
import PestControlIcon from '@mui/icons-material/PestControl';
import PetsIcon from '@mui/icons-material/Pets';


export const AboutAdapterService = {
  getItems(): ICustomListItem[] {
    return [
      {
        icon: {
          icon: <PestControlIcon />
        },
        text: 'Будиночок розташований серед лісу, тому на території можлива поява комах. Ми регулярно обробляємо ділянку спеціальними засобами, але повністю виключити їхню присутність неможливо.'
      },
      {
        icon: {
          icon: <PetsIcon />
        },
        text: 'На територію іноді навідуються два дружні котики. Вони не агресивні, люблять ласку й можуть прийти погрітися або поспостерігати за гостями'
      }
    ]
  },
}