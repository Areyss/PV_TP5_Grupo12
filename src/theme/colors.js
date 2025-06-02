import { useColorModeValue } from "@/components/ui/color-mode"

export function useAppColors() {
  return {
    primary: useColorModeValue('#A0C878', '#720455'),
    secondary: useColorModeValue('#E9ECEF', '#1A1A1A'),
    accent: useColorModeValue('#F8F9FA', '#121212'),
    textPrimary: useColorModeValue('#000', '#E9ECEF'),
    textSecondary: useColorModeValue('#ADB5BD', '#ADB5BD'),
    danger: useColorModeValue('#C43F4E', '#C43F4E'), 
    dangerHover: useColorModeValue('#A13340', '#C43F4E'),
    warning: useColorModeValue('yellow.400', 'yellow.300'),
    success: useColorModeValue('green.500', 'green.400'),
    info: useColorModeValue('blue.500', 'blue.300'),
    gray: useColorModeValue('gray.500', 'gray.400'),
  };
}