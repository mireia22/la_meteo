import { CustomBtn } from "./CustomButton-styles";

type CustomButtonProps = {
  children: React.ReactNode;
  variant?: string;
  onClick: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant,
  onClick,
}) => (
  <CustomBtn className={variant} onClick={onClick}>
    {children}
  </CustomBtn>
);

export default CustomButton;
