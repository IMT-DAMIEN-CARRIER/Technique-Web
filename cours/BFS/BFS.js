class Graph{
    constructor(matrix){
        this.matrix = matrix;
    }

    distance(root){
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

                if (1 === this.matrix[i][j] && 1 !== this.matrix[j][i]) {
                    digraph += i + ' -> ' + j + ' ';
                }
            }
        }

        digraph += '}';

        console.log(digraph);

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