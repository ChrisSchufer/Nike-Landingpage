import { motion } from 'framer-motion';

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red text-white border-coral-red'
    } rounded-full ${fullWidth && 'w-full'}"}`}
    >
      {label}
      {iconURL && (
        <motion.img
          whileHover={{ x: 5, rotate: 360, transition: { duration: 0.3 } }}
          className="ml-2 rounded-full w-5 h-5"
          src={iconURL}
          alt="arrowRight icon"
        />
      )}
    </motion.button>
  );
};

export default Button;
