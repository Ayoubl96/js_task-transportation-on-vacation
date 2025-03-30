/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40;
  let cost = 0;

  const LONG_TERM_DISCOUNT = 50;
  const LONG_TERM_DAYS = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const SHORT_TERM_DAYS = 3;

  switch (true) {
    case days < LONG_TERM_DAYS && days >= SHORT_TERM_DAYS:
      cost = days * rentalCost - SHORT_TERM_DISCOUNT;
      break;
    case days >= LONG_TERM_DAYS:
      cost = days * rentalCost - LONG_TERM_DISCOUNT;
      break;
    default:
      cost = days * rentalCost;
  }

  return cost;
}

module.exports = calculateRentalCost;
