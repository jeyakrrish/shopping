import { useNavigate } from 'react-router-dom';

import {BackgroundImage, Body, DirectoryItemConatiner} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();
  const onClickNavigate = () => navigate(route);

  return (
    <DirectoryItemConatiner onClick={onClickNavigate}>
      <BackgroundImage imageUrl = {imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemConatiner>
  )
}

export default DirectoryItem;