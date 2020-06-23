import { BinaryBooleanOperation } from '../../types';

/**
 * Check whether a bigint is greater than or equal to another.
 *
 * @param subject The subject to compare.
 * @param comparator The comparator to compare the subject to.
 *
 * @returns Whether the bigint is greater than or equal to the other.
 */
const greaterThanOrEqual: BinaryBooleanOperation<bigint> = (
  subject,
  comparator
) => {
  return subject >= comparator;
};

export default greaterThanOrEqual;
