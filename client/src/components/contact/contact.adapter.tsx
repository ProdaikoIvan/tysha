import { ICustomListItem } from "../../types/custom-list.type"
import InstagramIcon from '@mui/icons-material/Instagram';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

export const ContactAdapterService = {
  getItems(): ICustomListItem[] {
    return [
      {
        icon: {
          icon: <InstagramIcon />,
        },
        text: ' Усі бронювання здійснюються через <a href="https://www.instagram.com/tysha.ua_/" target="_blank">Instagram.</a>'
      },
      {
        icon: {
          icon: <QuestionAnswerIcon />,
        },
        text: '<a href="https://www.instagram.com/tysha.ua_/" target="_blank">Напишіть нам у директ</a> —  ми відповімо на всі ваші питання і допоможемо обрати дати.'
      }
    ]
  },
}