<template >
    <div class="ava-prev">
       <p>{{cadres[currentCadres]}}</p> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentCadres:0,
            cadres:[                                                                                                                                                                                                             
`                                                ##%                                     
                                            #%%%%%%%%%%%                                 
                                          %%%##**++**###%%%                              
                                        #**++===------===+*%%                            
                                       ##*++==---::------==+#%                           
                                      %#*++=----::::::::--==+#%                          
                                      %#*++==-------:::::---=*##                         
                                      %#*+=---::::::::::----=+##                         
                                      %%%%%##*+=--=++=++=====+##                         
                                    %%%%%%%%%%+*=-#%%%%+++*#++##                         
                                    %%%%%%%%%%%+-=%%%%%%%%%%++=--=                       
                                     %%%%%%%%%#=--+%%%%%%%%%==-:--                       
                                      %%%%%%###+==-=%%%%%%%+=+-:--                       
                                      %*+=--=**-:--=:::::::-==---                        
                                       *+=--=+*------::::::-+--=                         
                                       #*++=+++==--:-:::::-=+                            
                                        #*+=+**=+====:-::-=+*                            
                                         #*+++=---:::::--==++                            
                                          %#*+=-:::::-===--=+                            
                                          ####+=----====---=+                            
                                          ##****==------:-=+-:                           
                                         *=*+++++-::--:::-=+:::                          
                                       ***-*+=====--::::::==...::.                       
                                    :-=+++:++=-----::::::-+-.....:..::                   
                                 --::=+=+=:=+=----::::::-+=-......::.....                
                             ===--.:-==--:-====-:::::::-+=+-.........:...:...            
                         ---=-:-:.--:=:.-::--=--::::-==++=:.....................:        
                       =-=--::-:.-::-:::-::::=:.:::-==-...........................::     
                      ==--:::-.:-::-::.:-:::::::.:==-:.............................:-    
                     +=--:::-.:-:.-::::--:.::....-:......................... .......:-   
                    -=-:::--::-:.-:::::-:.:::..-:+-.........................  ..  ..::   
                    -=-::-=::-::--:::::::.....:: ....................... ...   .  ...:-  
                   --=-:-=-:::.--:::::::......-.......................... ...  . ....::- 
                   -==-:-+:::.:=::::::.:....:::..........................  ..  . ....::: 
                   :=+-:==::.-=--:::.:.::..:::.............      ........  . ..  .....:: 
                  ::-+===:::---::::::::::.:::..............:.......   .+-::.... ......:.:
                  ::-+*=::----::::::::::::-::.....................:::....:-. .........:.:
                  ---+*------:::::::::::-:::.:.......:........      ..................:..
                  :--+#----::::::::::::-:::..:......::..........          .....:......:..
                  ---+#=---:::---:-::---::.....:=...:::...... ......   . ....:::.........
                  --+*+---:::-----:--::::.:.........::........... . ........::......:...:`
,                                                                                                                                                                                                                    
`                                                %%                                      
                                            %%%%%%%%%%%#                                 
                                          %%%%%########%%%%                              
                                        %%%%##*+++++*****#%%%                            
                                      ##**++===--------==+*#%                            
                                      ##*++==---:::::----==*#%                           
                                     %#*++=---::::::::::---=*#%                          
                                     %#*+==---::::::::::---=+#%                          
                                     %#*++=-----:::::::::---+#%                          
                          ++*+++     %#*+=--:::::::..:::---==##==                        
                       *+==--=====+==%%%%%###*+++*####%%%#+=+#-:--                       
                     #*+++++*+=-===#%%%%%%%%%%%#*#%%%%%%%%%##=-:-                        
                  #*+==------=*+--=+%%%%%%%%%%*--*%%%%%%%%%*==:--                        
                 #+=----=+***=-=*===+%%%%%%%%%+---#%%%%%%%%+=---                         
                *+=---=+==+##*=-=--=  %%%%#**#*=-===+**++=--=--                          
               #+=----===+++++=---=    *+=--=*+-----::::::-=+                            
              #*=-------==------=       *+=++++---:-----::-++                            
             #*+=-----=-------==         *+=**+++==++--::-==+                            
           #*++==---------====            *++++===--::--====+                            
          #*+=====----=====+               ##+=--::::-=+=--=-                            
         #*+==--------==+                 ####+=----=++=---=::.                          
       ##*++=----====+                   *+*+++*+=-:---::--+::..:                        
      #**+==----===+                  =++*+-+=====---:::::==:........                    
     #**+=---=====         ::    ====-=+=+=:+=-----::::::-+=......:.....                 
::-*#*++=---====+       +=---:--===--====-:-===-::::::::-+==................             
-=#**+==---=====    +++=-::---::-----:-::-::-==-:::::::-=*+:....:..............          
-#**+==--====+-  +==+---:::::::::-::::-::-.::-=.:::::---:.........................-      
===---::::::::::=+------::::::::::-::::::-..::.:..:=--:...........................:-     
=:........::-=----::::-:::::.:::::--:::::-........-:...............................::    
*-:......::------:-:::-::::.::::.::-::::::......:-*:.......................   .. ..::    
++++-::::--:::::::::::-:...::::.::::::..........: ...................... ...   . ...::   
+++===---===----::::::-::::::.::::::-:.........:......................... ... .. ...:::  
=--::::--::::::::::::--:::..::::::::::.........:.........................  ....  ....::  
::::::----:::::::::::--::::::::-:::::.......::.:............  .. . ....... . ..  ....:.  
:::::---:::::::::::::---::::::::::::....:..:::.............:::....     #*+=..........:.. 
:::::-:::::::::::::--=---:::::::::::::::::::::....................:::................:.. 
-::::-::::::::::::---=---:::::::::::::::::::..:......:..........        .............:.. 
::---:-::::::::::::--=--=-::::::::::::::::::..:......::..........        ......:.....:.. 
---:::::::::::::--   ==-==-::::::::::::::::...:.:+:..::......................::......:..:
--:::::::-====       ======-:::::::::::::::...:.......:......................::......:...
--::::::-===         ++=====-:::::::::::::::.::......::...................::::.......:...`
,                                                                   
`
                                             %%%%%                                      
                                          %%%%%%%%%%%%%                                  
                                       #%%%##*++***####%%%                               
                                      #**+==-------=-==+*#%%                             
                                     #*++=----::::::---==+#%#                            
                                    #**+=----::::::::::--=+#%                            
                                    #*+==---::::::::::::--=*##                           
                                   %#*++=---::::::::::::---+#%                           
                                   %#*+=--:::::::...::-----+#%                           
                                   ##%%%###=-::-=*##**+===-+#+==                         
                                   ##*######*-::=++*##*=---==::::                        
                                   #*++**+***-:---==---:::-==-:-                         
                                    #+=====*+----::--:::::-=-::-                         
                                    #+=--:-*+-----:::...::-=:--                          
                                     *=---+#+-----::::.::-==:-                           
                                     #*==+**=--::-----:::-++                             
                                      *+==*#++====+=-:::-=++                             
                                       *+++++===--::::--===                              
                                        ##*==--::::::-==--=                              
                                        ###*=-::::--++=---=                              
                                         ####*++=+++=--:--=::                            
                                        =#*++*+--::--:::---...                           
                                       *=*+===+=-::::::::=-......                        
                                     -++-=*=-----:::::::==:..........                    
                                  ::-+++--++----:::::::==-:.............                 
                             -----:-==---+===-::::::::==+-...................            
                         ::--::-::::-.:::-==--:::::--=+=-:..................:...         
                       -----::-.-:::.:::.:-=:.::::-=-:.....................:.......      
                     +==-:-::::-.::.:::::::::..:-=--........................ .....::     
                    ==-::-::-::.::.:.:-:.::....:-:.......................... ......::    
                   :--:::::-::.:-..::::...:..::--..........................  ..  ...::   
                   ---::-:-::.:-:.:::-:...:.::..............................     ...:::  
                  +--::-:--:.:-:..:::::...:::. ..............................   .....::  
                 ++--:----:.:--..::::::..::::............................ ..    ......:- 
                 =+-=-=-=:.:--:.:::::::..:::.............. .............. ....  ......:: 
                =-+==--=-::--::.:::::::..::..................... .    -:...... ........: 
                =-==-==+-:-=:::::::::::.:::.................:::.......::-++... ........:-
               ==--=-=+=-:=::-:::::::::.::.:.......:.................:::::..............-
               ===-=--++==-::-::::::::.:-:.:.......:..............      ................:
               --===--++==::--::::::::.::..........::..............     .............:...`
            ]
        }
    },
    mounted() {
        setInterval(() => {
            if(this.currentCadres < 2){
                this.currentCadres++;
            }else{
                this.currentCadres=0
            }
            
        }, 333);
    },
    name:'ava-play'
}
</script>
<style lang="scss" scoped>
    .ava-prev{
        white-space: pre;
        font-family: monospace;
        font-size: 10px;
        line-height: 10px;
        letter-spacing: unset;
        transform: unset;
        display: inline-block;
        padding: 10px;
        border-radius: 10px;
        flex: left;
        box-shadow: 0px 0px 14px var(--main-color);
        backdrop-filter: blur(1.5px);
    }

    @media (max-width: 700px) {
        .ava-prev{
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
            p{
                font-size: 9px;
            }
        }
      }
    
</style>