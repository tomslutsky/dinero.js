import { BinaryOperation } from '../../types';

/**
 * Returns the sum of two numbers.
 *
 * @param augend The number to add to.
 * @param addend The number to add.
 *
 * @returns The sum of the two numbers.
 */
const add: BinaryOperation<number> = (augend, addend) => {
  return augend + addend;
};

export default add;
