import { Progress as ReactstrapProgress } from 'reactstrap';
import IProgress from './IProgress';

const Progress = ({ max, value, color, role, ...otherProps }: IProgress) => {
  return (
    <ReactstrapProgress
      max={max}
      value={value}
      color={color}
      role={role}
      {...otherProps}
    />
  );
};

export default Progress;
