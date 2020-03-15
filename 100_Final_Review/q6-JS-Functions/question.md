### Why does the myFn() work as expected in Case B, but not in Case A?

(Hint: consider when does myFn get called)

    Case A:

        <script>
            myFn();
            var myFn = function(){ 
                console.log("Don't worry!");
            }; 
        </script>

    Case B:

        <script>
            myFn();
            function myFn(){ 
                console.log("Be happy!");
            }; 
        </script>



