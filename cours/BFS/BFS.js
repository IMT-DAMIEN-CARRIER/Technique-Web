class Graph{
    constructor(matrix){
        this.matrix = matrix;
    }

    distance(root){
    }

    display(){
        viz.renderSVGElement('digraph { a -> b [dir="both"] }')
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