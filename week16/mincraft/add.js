export function add(row, colnum, block) { 
  if (row >= 1 && row < 3 && colnum > 9 && colnum < 13) {
    block.classList.add("leaves1");
  }
  if (row >= 3 && row < 5 && colnum > 8 && colnum < 14) {
    block.classList.add("leaves1");
  }
  if (row >= 5 && row < 6 && colnum > 7 && colnum < 15) {
    block.classList.add("leaves1");
  }
  if (row >= 6 && row < 7 && colnum > 7 && colnum < 11) {
    block.classList.add("leaves1");
  }
  if (row >= 6 && row < 7 && colnum > 11 && colnum < 15) {
    block.classList.add("leaves1");
  }
  if (row >= 6 && row < 7 && colnum > 10 && colnum < 12) {
    block.classList.add("soil1");
  }
  if (row >= 7 && row < 11 && colnum > 10 && colnum < 12) {
    block.classList.add("soil1");
  }
}
