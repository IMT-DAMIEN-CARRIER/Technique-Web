class Graph{
    constructor(matrix){
        this.matrix = matrix;
    }

    distance(root){
        let distances = [];

        for (let i = 0; i < this.matrix.length; i++) {
            if (i === root) {
                distances.push(0);
            } else {
                distances.push(-1);
            }
        }

        let q = [root];

        while (q.length > 0) {
            let node = q.shift();

            let adjacencyNodes = [];

            for(let i = 0; i < this.matrix.length; i++) {
                if (1 === this.matrix[node][i]) {
                    adjacencyNodes.push(i);
                }
            }

            for (let i =0; i < adjacencyNodes.length; i++) {
                if (-1 === distances[adjacencyNodes[i]]) {
                    distances[adjacencyNodes[i]] = distances[node] + 1;
                    q.push(adjacencyNodes[i]);
                }
            }
        }

        console.log(distances);
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