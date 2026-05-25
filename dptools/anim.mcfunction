# So you can see when something is generating somewhere even with particles set to minimal
summon block_display ~ ~ ~ {Tags:["generating"],transformation:{left_rotation:[0f,0f,0f,1f],right_rotation:[0f,0f,0f,1f],translation:[0f,0f,0f],scale:[0.5f,0.5f,0.5f]},block_state:{Name:"minecraft:black_wool"}}

# When someone falls in the void
kill @e[type=block_display,tag=generating]