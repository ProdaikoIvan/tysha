import { CustomListItemIconType, ICustomListItem } from "../../types/custom-list.type"
import RouteIcon from "@mui/icons-material/Route";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CheckIcon from "@mui/icons-material/Check";
import ForestIcon from "@mui/icons-material/Forest";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export const LocationAdapterService = {
  getItems(): ICustomListItem[] {
    return [
      {
        icon: {
            icon: <DirectionsCarIcon />,
            iconType: CustomListItemIconType.INFO
        },
        text: 'Будиночок розташований посеред соснового лісу в мікрорайоні Вакуленці, приблизно за 500 метрів від Вакуленцівської греблі.'
      },
      {
        icon: {
            icon: <RouteIcon />,
            iconType: CustomListItemIconType.INFO
        },
        text: 'Відстань від центру Полтави — близько 17 хвилин на авто, або приблизно 12 хвилин від Південного вокзалу.'
      },
      {
        icon: {
            icon: <PriorityHighIcon />,
            iconType: CustomListItemIconType.ERROR
        },
        text: 'Увага! Рекомендуємо прокладати маршрут саме до Вакуленцівської греблі, оскільки Google Навігатор іноді пропонує шлях через погану ґрунтову дорогу, що може бути незручною, особливо після дощу.'
      },
      {
        icon: {
            icon: <CheckIcon />,
            iconType: CustomListItemIconType.SUCCESS
        },
        text: 'Дорога до будиночка підходить для легкових автомобілів у будь-яку пору року — як взимку, так і влітку.'
      },
      {
        icon: {
            icon: <ForestIcon />,
            iconType: CustomListItemIconType.SUCCESS
        },
        text: 'А вже через декілька хвилин після заїзду вас зустріне затишна атмосфера лісу, спів птахів і відчуття повного відпочинку.'
      }
    ]
  },
}
