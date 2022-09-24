import { Wrapper } from './styles';

import { ICheckBox } from './interfaces';

const CheckBox = ({ border = 'square', ...rest }: ICheckBox) => {
  return <Wrapper border={border} type="checkbox" {...rest} />;
};

export default CheckBox;
