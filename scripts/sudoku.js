
let sudoku = document.querySelector('.sudoku')
let arr = []
let divs = []
let z = -1
const colorsClasses = [['orchid','orange'],['orange','orchid']]
for(let i=0;i<9;i++)
    {
        let [div,inputs] = createInputBox()
        divs.push(div)
        arr.push(inputs)
        sudoku.append(div)
    }
setInterval(() => {
    z++
    if(z == 2)
        z = 0  
    for(let i=0;i<9;i++)    
        for(let j=0;j<9;j++)
        {
                let x = Math.floor(i/3)
                let y = Math.floor(j/3)
                if(x == 0 && y == 0)
                    arr[i][j].className = `box-3x3 ${colorsClasses[z][0]}`//" orchid"
                else if(x == 0 && y == 1)
                    arr[i][j].className = `box-3x3 ${colorsClasses[z][1]}`//" orange"
                else if(x == 0 && y == 2)
                    arr[i][j].className = `box-3x3 ${colorsClasses[z][0]}`//" orchid"
                else if(x == 1 && y == 0)
                    arr[i][j].className = `box-3x3 ${colorsClasses[z][1]}`//" orange"
                else if(x == 1 && y == 1)
                    arr[i][j].className = "box-3x3 "
                else if(x == 1 && y == 2)
                    arr[i][j].className = `box-3x3 ${colorsClasses[z][1]}`//" orange"
                else if(x == 2 && y == 0)
                    arr[i][j].className = `box-3x3 ${colorsClasses[z][0]}`//" orchid"
                else if(x == 2 && y == 1)
                    arr[i][j].className = `box-3x3 ${colorsClasses[z][1]}`//" orange" 
                else if(x == 2 && y == 2)
                    arr[i][j].className = `box-3x3 ${colorsClasses[z][0]}`//" orchid"
            }
        // fillRandomValue()    
}, 1300)
function createInputBox()
{
    let div = document.createElement('div')
    let inputs = []
    for(let i=0;i<9;i++)
    {
        let x = document.createElement('input')
        x.className += " box-3x3"
        inputs.push(x)
        div.append(x)
    }
    return [div,inputs]
}
function playWithComputer(){
    let sudokuArr = []
    for(let i=0;i<9;i++)
    {
        let bag = []
        for(let j=0;j<9;j++)
        {   if(arr[i][j].value != '')
        bag[j] = +arr[i][j].value
        else
        bag[j] = 0
    }
    sudokuArr.push(bag) 
} 
    let sudokuArrSol = runProgramToSolveSudoku(sudokuArr)
    const finalResult = document.querySelector('.finalResult')
    if(sudokuArrSol[0]){
        for(let i=0;i<9;i++)
            for(let j=0;j<9;j++)
            arr[i][j].value = sudokuArrSol[1][i][j]
            finalResult.textContent = "Sudoku solved"
        console.log('sovled')
    }else{
        finalResult.innerHTML = "Sudoku can't be solved<br>Solution doesn't exist."
        console.log("-1")
    }
    
}
function runProgramToSolveSudoku(input) {
    console.log(input)
    const ans = []
    let b = input
    let count = 0,bag = ""
    f(0,-1)
    console.log(ans)
    if(!count)
    return [0]
    else
    return [1,ans]
    function f(r,c){
        if(r == 8 && c == 8)
        {
            count++
            if(count == 1)
            b.map(el=>{
                let a1 = []
                    el.map(cel=>a1.push(cel))
                    ans.push(a1)
                })
                return
            }
            let nc = 0,nr  = 0
            if(c == 8)
        {
            nr = r+1
            nc = 0
            // console.log(nr,nc)
        }else{
            nr = r
            nc = c + 1
        }
        
        if(b[nr][nc] != 0)    
        f(nr,nc)
        else
        for(let i=1;i<=9;i++)
        if(check(nr,nc,i))
        {
            b[nr][nc] = i
            f(nr,nc)
            b[nr][nc] = 0
        }
    }
    function check(row,col,n)
    {
        for(let i=0;i<9;i++)
        if(b[row][i] == n)
        return false
        for(let i=0;i<9;i++)
        if(b[i][col] == n)
        return false
        
        const x = Math.floor(row/3)*3
        const y = Math.floor(col/3)*3
        for(let i=0;i<3;i++)
        for(let j=0;j<3;j++)
        if(b[i+x][j+y] == n)
        return false
        return true                
    }
}
let randomSudokuSelection = [
    [0,4,0,0,0,0,1,7,9],
    [0,0,2,0,0,8,0,5,4],
    [0,0,6,0,0,5,0,0,8],
    [0,8,0,0,7,0,9,1,0],
    [0,5,0,0,9,0,0,3,0],
    [0,1,9,0,6,0,0,4,0],
    [3,0,0,4,0,0,7,0,0],
    [5,7,0,1,0,0,2,0,0],
    [9,2,8,0,0,0,0,6,0]
        ]
for(let i=0;i<9;i++)
    for(let j=0;j<9;j++)
        if(randomSudokuSelection[i][j])
        arr[i][j].value = randomSudokuSelection[i][j]
        else
        arr[i][j].value = ' '
function fillRandomValue()
{
    document.querySelector('.finalResult').textContent = "Result will shown here when Computer will solve Sudoku"
    v = [
        [
            [0,4,0,0,0,0,1,7,9],
            [0,0,2,0,0,8,0,5,4],
            [0,0,6,0,0,5,0,0,8],
            [0,8,0,0,7,0,9,1,0],
            [0,5,0,0,9,0,0,3,0],
            [0,1,9,0,6,0,0,4,0],
            [3,0,0,4,0,0,7,0,0],
            [5,7,0,1,0,0,2,0,0],
            [9,2,8,0,0,0,0,6,0]
        ],
        [
            [2,0,6,0,0,0,0,4,9],
            [0,3,7,0,0,9,0,0,0],
            [1,0,0,7,0,0,0,0,6],
            [0,0,0,5,8,0,9,0,0],
            [7,0,5,0,0,0,8,0,4],
            [0,0,9,0,6,2,0,0,0],
            [9,0,0,0,0,4,0,0,1],
            [0,0,0,3,0,0,4,9,0],
            [4,1,0,0,0,0,2,0,8]
        ],
        [
            [0,2,7,0,0,0,8,0,0],
            [0,0,1,0,0,0,7,0,0],
            [0,0,0,4,0,0,0,0,0],
            [3,0,0,0,0,0,0,8,0],
            [0,5,0,0,0,0,0,0,9],
            [0,7,0,0,2,8,0,0,0],
            [0,9,0,0,6,7,0,0,0],
            [5,8,0,0,0,0,0,3,0],
            [0,0,0,0,4,0,0,5,6]
        ],
        [
            [8,0,0,2,0,0,0,4,6],
            [0,0,7,9,0,0,0,0,0],
            [1,0,0,0,0,0,5,0,0],
            [0,0,0,5,0,0,0,3,2],
            [4,0,8,0,0,0,7,0,1],
            [3,2,0,0,0,7,0,0,0],
            [0,0,6,0,0,0,0,0,9],
            [0,0,0,0,0,3,2,0,0],
            [2,8,0,0,0,6,0,0,3]
        ],
        [
            [1,0,0,0,0,7,0,9,0],
            [0,3,0,0,2,0,0,0,8],
            [0,0,9,6,0,0,5,0,0],
            [0,0,5,3,0,0,9,0,0],
            [0,1,0,0,8,0,0,0,2],
            [6,0,0,0,0,4,0,0,0],
            [3,0,0,0,0,0,0,1,0],
            [0,4,0,0,0,0,0,0,7],
            [0,0,7,0,0,0,3,0,0]
        ]
    ]
    let x = Math.floor(Math.random()*5)
    for(let i=0;i<9;i++)
    for(let j=0;j<9;j++)
    {
        if(v[x][i][j])
            arr[i][j].value = v[x][i][j]
        else
            arr[i][j].value = ' '
    }
    
}