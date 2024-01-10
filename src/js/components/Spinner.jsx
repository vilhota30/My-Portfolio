import { RotatingLines } from 'react-loader-spinner';
import '../../css/pages/components/Spinner.css';

const Loader = () => {
    return (
      <div className="wrapper">
        <RotatingLines
          strokeColor="brown"
          strokeWidth="5"
          animationDuration="0.75"
          width="150"
          visible={true}
        />
      </div>
    );
  };
  
export default Loader;