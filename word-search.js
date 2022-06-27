const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
const word = 'ABCB';

const wordExists = (board, word) => {
    let currentStringIndex = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (currentStringIndex < word.length && word[currentStringIndex] == board[i][j] && dfs(board, word, i, j, currentStringIndex)) {
                return true;
            }
        }
    }
    return false;
}

const dfs = (board, word, i, j, strIndex) => {
    // console.log(`board: ${board[i] ? board[i][j]: 'none'} and ${word[strIndex]}`,i < 0 || j < 0 || i >= board.length || strIndex > word.length || j >= board[i].length || board[i][j] !== word[strIndex]);
    // console.log(`board: ${board[i] ? board[i][j]: 'none'} and ${word[strIndex]}`,i < 0 , j < 0 , i >= board.length , strIndex > word.length , j >= board[i].length , board[i][j] !== word[strIndex]);
    if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || board[i][j] !== word[strIndex]) {
        return false;
    }

    if (strIndex === word.length - 1) {
        return true;
    }
    // console.log(' ==> ' , board[i][j], strIndex, word.length);
    const temp = board[i][j];
    board[i][j] = ' ';
    const found = dfs(board, word, i+1, j, strIndex + 1) ||
    dfs(board, word, i, j+1, strIndex + 1) ||
    dfs(board, word, i, j-1, strIndex + 1) ||
    dfs(board, word, i-1, j, strIndex + 1);
    board[i][j] = temp;
    return found;
}

console.log(wordExists(board, word));