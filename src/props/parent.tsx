import { ChildAsFC } from './child';

const parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('clicked')}>
      ass
    </ChildAsFC>
  );
};

export default parent;
