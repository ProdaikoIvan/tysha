import { CustomListItemIconType, ICustomListItem } from "../../types/custom-list.type"
import InstagramIcon from '@mui/icons-material/Instagram';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

export const ContactAdapterService = {
  getItems(): ICustomListItem[] {
    return [
      {
        icon: {
          icon: <InstagramIcon />,
        },
        text: ' Усі бронювання здійснюються через Instagram.'
      },
      {
        icon: {
          icon: <QuestionAnswerIcon />,
        },
        text: 'Напишіть нам у директ —  ми відповімо на всі ваші питання і допоможемо обрати дати.'
      }
    ]
  },
}