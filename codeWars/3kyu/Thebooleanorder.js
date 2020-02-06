function solve(s, ops) {
    let symbols = s.split("");
    let operators = ops.split("");
    let n = symbols.length;

    let F = [];
    let T = [];

    for (let i = 0; i < n; i++) {
        F[i] = F[i] || [];
        T[i] = T[i] || [];
        F[i][i] = symbols[i] === "f" ? 1 : 0;
        T[i][i] = symbols[i] === "t" ? 1 : 0;
    }

    for (let gap = 1; gap < n; gap++) {
        for (let i = 0, j = gap; j < n; ++i, ++j) {
            T[i][j] = F[i][j] = 0;
            for (let g = 0; g < gap; g++) {
                let k = i + g;

                let tik = T[i][k] + F[i][k];
                let tkj = T[k + 1][j] + F[k + 1][j];

                if (operators[k] == "&") {
                    T[i][j] += T[i][k] * T[k + 1][j];
                    F[i][j] += tik * tkj - T[i][k] * T[k + 1][j];
                }
                if (operators[k] == "|") {
                    F[i][j] += F[i][k] * F[k + 1][j];
                    T[i][j] += tik * tkj - F[i][k] * F[k + 1][j];
                }
                if (operators[k] == "^") {
                    T[i][j] += F[i][k] * T[k + 1][j] + T[i][k] * F[k + 1][j];
                    F[i][j] += T[i][k] * T[k + 1][j] + F[i][k] * F[k + 1][j];
                }
            }
        }
    }
    return T[0][n - 1];
};


console.log(solve("tft", "^&"), 2);
console.log(solve("ttftff", "|&^&&"), 16);
console.log(solve("ttftfftf", "|&^&&||"), 339);
console.log(solve("ttftfftft", "|&^&&||^"), 851);
console.log(solve("ttftfftftf", "|&^&&||^&"), 2434);