// usePasswordValidator.js
import { ref, computed } from 'vue';

export function usePasswordValidator(formData, regex) {
  const validations = {
    lowerUpperCharacterCase: validator(regex.lowerUpperCharacterCase),
    specialCharacterCase: validator(regex.specialCharacterCase),
    alphaNumeriCase: validator(regex.alphaNumeriCase),
    minCharacterCase: validator(regex.minCharacterCase),
    maxCharacterCase: validator(regex.minCharacterCase), // You have a typo here in the original code
  };

  function validator(validation) {
    return computed(() => validation.test(formData.new_password));
  }

  return validations;
}
