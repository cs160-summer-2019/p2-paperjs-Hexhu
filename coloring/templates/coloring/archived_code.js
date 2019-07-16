

			// your custom interaction goes here!
			// you may replace everything
			function defaultColorTool() {
				var tool = new paper.Tool();
        tool.name='defaultColorTool'

				tool.onMouseDown = function (event) {
				    var hit = mandala.item.hitTest(event.point, { tolerance: 10, fill: true });
				    if (hit) {
				        hit.item.fillColor = cp.history[cp.history.length - 1];
				    }
				}
			}
      


      function useTool() {
        //currToolFunc()
        console.log("Curr tool index: ", currToolIndex)
        switch (currToolIndex) {
          case 0:
            // The default function is to color the mandala.
            console.log("Curr tool index: ", currToolIndex)
            console.log("Using coloring tool 0.");
            defaultColorTool();
            console.log("Used coloring tool 0");
            break;
          case 1:
            console.log("Using coloring tool 1.");
            gradientColorLine();
            console.log("Used coloring tool 1");
            break;
          case 2:
            huechanger();
            break;
          case 3:
            break;
        }
      }


      
      function huechanger() {
			}


			// your rectangle gradient interaction goes in this function
			// you may also add code outside of the function (e.g., global variables)
			function myGradientInteraction(path) {
				var tool = new paper.Tool();

				gradientOrigin = null;
				gradientDest   = null;

				tool.onMouseDown = function (event) {
					gradientOrigin = event.point;
				}

				tool.onMouseUp = function (event) {
					gradientDest = event.point;
					path.fillColor = {
						gradient: {
								stops: [cp.history[cp.history.length - 1], cp.history[cp.history.length - 2]]
						},
						origin: gradientOrigin,
						destination: gradientDest
					};
					paper.view.draw();
				}
			}





      
    // A global pointer to the tool function, called in useTool().
    //var currToolFunc = defaultToolFunc;
    // Or a number instead, as we switch according to the selected number.
    var currToolIndex = 0

    // Gets called whenever we want to switch tools.
    // For example, <img onclick='javascript:selectTool(123)'></img>
    function selectTool(index) {
      currToolIndex = index;
      console.log("???")
    }