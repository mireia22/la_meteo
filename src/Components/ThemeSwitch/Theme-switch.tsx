import { CustomBtn } from "../CustomButton/CustomButton-styles";

type ThemeSwitchProps = {
  currentTheme?: {
    imageSrc: string;
    altText: string;
  };
  toggleTheme: () => void;
};
const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  currentTheme,
  toggleTheme,
}) => {
  // Check if currentTheme is falsy (null or undefined).
  if (!currentTheme) {
    return null;
  }

  const { imageSrc, altText } = currentTheme;

  return (
    <CustomBtn className="theme" onClick={toggleTheme}>
      <img src={imageSrc} alt={altText} width="24" height="24" />
    </CustomBtn>
  );
};

export default ThemeSwitch;
