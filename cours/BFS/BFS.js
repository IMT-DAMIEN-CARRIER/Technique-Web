class Graph{
    constructor(matrix){
        this.matrix = matrix;
    }

    distance(root){
        var q = [root];

        while (q.length > 0) {
            var node = q.shift();

            for (let i = 0; i < this.matrix.length; i++) {
                if (false === q.includes(i,0) && 1 === this.matrix[root][i]) {
                    q.push(i);
                    console.log(q);
                }
            }
        }
    }

    display(){
        var digraph = 'digraph { ';

        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[0].length; j++) {
                if (-1 === digraph.indexOf(j + ' -> ' + i + ' [dir="both"] ', 0) &&
                    1 === this.matrix[i][j] &&
                    1 === this.matrix[j][i]
                ) {
                    digraph += i + ' -> ' + j + ' [dir="both"] ';
                }

                if (1 === this.matrix[i][j] && 0 === this.matrix[j][i]) {
                    digraph += i + ' -> ' + j + ' ';
                }
            }
        }

        digraph += '}';

        viz.renderSVGElement(digraph)
            .then(function(element) {
                document.body.appendChild(element);
            })
            .catch(error => {
                // Create a new Viz instance (@see Caveats page for more info)
                viz = new Viz();

                // Possibly display the error
                console.error(error);
            });
    }
}

var viz = new Viz();