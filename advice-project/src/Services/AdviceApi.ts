import type { Advice } from "../Types/adviceTypes";


export const AdviceApi = async (): Promise<Advice> => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return data.slip;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
