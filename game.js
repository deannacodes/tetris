Vue.config.keyCodes.z = 90
Vue.config.keyCodes.a = 65
Vue.config.keyCodes.d = 68


var vm = new Vue({
    el: '#game-box',
    data: {
        blocks: [
            {block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0}
        ],
        upNextBlocks: [
            {block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0}
        ],
        interval: null,
        activePos: null,
        currentBlock: 0,
        currentBlockType: null,
        fallingSpeed: 1000,
        level: 1,
        popCount: 0,
        score: 0,
        status: "Start",
        upNext: null
    },
    methods: {

        fallingBlocks: function(pos, type) {
            this.activePos = pos;
            this.currentBlockType = type
            this.currentBlock++

            for (let i = 0; i < 4; i++) {
                const thisBlock = this.blocks[this.activePos[i]]    
                thisBlock.value = this.getTypeVal(this.currentBlockType)      
                thisBlock.block = this.currentBlock;  
            }  
            
            if (!this.canMove("d")) {
                clearInterval(this.interval)   
                this.interval = null
                
                alert("game over u suck haha")
                return
            }

            var self = this;
            if (this.interval == null) {
                this.interval = setInterval(function() {
                    if (self.status != "Resume") {

                        if (self.canMove("d")) {

                            self.moveBlock("d")

                        } else {
                            clearInterval(this.interval)                         
                            this.interval = null
                            self.popRow()
                            self.nextBrick()
                        } 

                    }

                },  this.fallingSpeed)
            }

        },

        popRow: function() {
            
            let rows = []
            for (let i = 0; i < 4; i++) {
                const row = Math.floor(this.activePos[i] / 10)

                if (!rows.includes(row))
                    rows.push(row)
            }

            let multiplier = 0;

            for (let j = 0; j < 20; j++) {
                
                let pop = true;
                for (let i = 0; i < 10; i++) {
                    const check = j * 10 + i
                    
                    if (this.blocks[check].value == 0) {
                        console.log(check + " is 0")
                        pop = false
                        break
                    }
                    
                }
                console.log(pop)
                if (pop == true) {
                    this.popCount++
                    multiplier++                    

                    for (let i = ((j + 1) * 10) - 1; i > 9; i--) {
                        this.blocks[i].block = this.blocks[i-10].block
                        this.blocks[i].value = this.blocks[i-10].value
                    }

                    for (let i = 9; i >= 0; i--) {
                        this.blocks[i].block = 0
                        this.blocks[i].value = 0
                    }

                    this.levelUp()

                }
            }

            this.calcScore(multiplier)

        },

        levelUp: function() {
            
            this.level = 1 + Math.floor(this.popCount / 10)
            if (this.fallingSpeed >= 100)
                this.fallingSpeed -= 50
        },

        calcScore: function(multiplier) {
            let add = 0
            switch (multiplier) {
                case 1: 
                    add = 40
                    break
                case 2:
                    add = 100
                    break
                case 3:
                    add = 300
                    break
                case 4:
                    add = 1200
                    break
                default:
                    add = 0

            }
            this.score += ( add * this.level ) 
        },

        moveBlock: function(dir) {

            switch (dir) {
                case "d":
                    amount = 10
                    break
                case "l":
                    amount = -1
                    break
                default:
                    amount = 1
            }
            
            if (this.canMove(dir)) {
                for (let i = 0; i < 4; i++) { 
                    let thisBlock = this.blocks[this.activePos[i]]  
                    thisBlock.value = 0
                    thisBlock.block = 0
                    this.activePos[i] += amount
                }
                for (let i = 0; i < 4; i++) { 

                    let thisBlock = this.blocks[this.activePos[i]]  
                    thisBlock.value = this.getTypeVal(this.currentBlockType)
                    thisBlock.block = this.currentBlock
                }
            }
        },

        rotateBlock: function(dir, newPos) {

            if (this.canMove(dir, newPos)) {
                for (let i = 0; i < 4; i++) { 
                    let thisBlock = this.blocks[this.activePos[i]]  
                    thisBlock.value = 0
                    thisBlock.block = 0
                }
                for (let i = 0; i < 4; i++) { 

                    let thisBlock = this.blocks[newPos[i]]  
                    thisBlock.value = this.getTypeVal(this.currentBlockType)
                    thisBlock.block = this.currentBlock
                }
            }
            
            this.activePos = newPos
        },

        left: function() {
            if (this.activePos != null) 
                this.moveBlock("l")
        },

        right: function() {
            if (this.activePos != null)
                this.moveBlock("r")
        },

        down: function() {
            if (this.activePos != null) 
                this.moveBlock("d")
        },

        rotatel: function() {
            let newPos = null
            if (this.currentBlockType === "line")
                newPos = this.rotateLinePos()  
            else if (this.currentBlockType === "t")
                newPos = this.rotateTPosL()  
            else if (this.currentBlockType === "s")
                newPos = this.rotateSPos()
            else if (this.currentBlockType === "z")
                newPos = this.rotateZPos()
            else if (this.currentBlockType === "l")
                newPos = this.rotateLPosL()
            else if (this.currentBlockType === "j")
                newPos = this.rotateJPosL()
            if (this.canMove("rl", newPos)) 
                this.rotateBlock("rl", newPos)    
        },

        rotater: function() {
            let newPos = null
            if (this.currentBlockType === "line") 
                newPos = this.rotateLinePos()  
            else if (this.currentBlockType === "t") 
                newPos = this.rotateTPosR()  
            else if (this.currentBlockType === "s")
                newPos = this.rotateSPos()
            else if (this.currentBlockType === "z")
                newPos = this.rotateZPos()
            else if (this.currentBlockType === "l")
                newPos = this.rotateLPosR()
            else if (this.currentBlockType === "j")
                newPos = this.rotateJPosR()
            if (this.canMove("rr", newPos)) 
                this.rotateBlock("rr", newPos)    
        },

        rotateLinePos: function() {
            let newPos = [0,0,0,0];
            if (this.activePos[0] + 10 == this.activePos[1]) {
                newPos[0] = this.activePos[0] + 10 - 1                
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] - 10 + 1
                newPos[3] = this.activePos[3] - 20 + 2
            } else {
                newPos[0] = this.activePos[0] - 10 + 1                
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] + 10 - 1
                newPos[3] = this.activePos[3] + 20 - 2
            }
            newPos = this.preventRotationOverlap(newPos)
            return newPos;
        },

        rotateTPosL: function() {
            let newPos = [0,0,0,0];
            if (this.activePos[0] + 10 + 1 == this.activePos[2]) {
                newPos[0] = this.activePos[0] + 10 + 1                
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] - 10 + 1
                newPos[3] = this.activePos[3] - 10 - 1
            } else if (this.activePos[0] - 10 + 1 == this.activePos[2]) {
                newPos[0] = this.activePos[0] - 10 + 1                
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] - 10 - 1
                newPos[3] = this.activePos[3] + 10 - 1
            } else if (this.activePos[0] - 10 - 1 == this.activePos[2]) {
                newPos[0] = this.activePos[0] - 10 - 1                
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] + 10 - 1
                newPos[3] = this.activePos[3] + 10 + 1
            } else if (this.activePos[0] + 10 - 1 == this.activePos[2]) {
                newPos[0] = this.activePos[0] + 10 - 1                
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] + 10 + 1
                newPos[3] = this.activePos[3] - 10 + 1
            }
            newPos = this.preventRotationOverlap(newPos)
            return newPos;
        },

        rotateTPosR: function() {
            let newPos = [0,0,0,0];
            if (this.activePos[0] + 10 + 1 == this.activePos[2]) {
                newPos[0] = this.activePos[0] - 10 + 1                
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] - 10 - 1
                newPos[3] = this.activePos[3] + 10 - 1
            } else if (this.activePos[0] + 10 - 1 == this.activePos[2]) {
                newPos[0] = this.activePos[0] + 10 + 1                
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] - 10 + 1
                newPos[3] = this.activePos[3] - 10 - 1
            } else if (this.activePos[0] - 10 - 1 == this.activePos[2]) {
                newPos[0] = this.activePos[0] + 10 - 1                
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] + 10 + 1
                newPos[3] = this.activePos[3] - 10 + 1
            } else if (this.activePos[0] - 10 + 1 == this.activePos[2]) {
                newPos[0] = this.activePos[0] - 10 - 1                
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] + 10 - 1
                newPos[3] = this.activePos[3] + 10 + 1
            }
            newPos = this.preventRotationOverlap(newPos)
            return newPos;
        },

        rotateSPos: function() {
            let newPos = [0,0,0,0]
            if (this.activePos[0] - 10 + 1 == this.activePos[2]) {
                newPos[0] = this.activePos[0] + 2
                newPos[1] = this.activePos[1] - 10 + 1
                newPos[2] = this.activePos[2]
                newPos[3] = this.activePos[3] - 10 - 1
            } else {
                newPos[0] = this.activePos[0] - 2
                newPos[1] = this.activePos[1] + 10 - 1
                newPos[2] = this.activePos[2]
                newPos[3] = this.activePos[3] + 10 + 1
             }
             newPos = this.preventRotationOverlap(newPos)
             return newPos;
        },

        rotateZPos: function() {
            let newPos = [0,0,0,0]
            if (this.activePos[0] + 10 + 1 == this.activePos[2]) {
                newPos[0] = this.activePos[0] - 10 + 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] - 10 - 1
                newPos[3] = this.activePos[3] - 2
            } else {
                newPos[0] = this.activePos[0] + 10 - 1
                newPos[1] = this.activePos[1] 
                newPos[2] = this.activePos[2] + 10 + 1
                newPos[3] = this.activePos[3] + 2
             }
             newPos = this.preventRotationOverlap(newPos)
             return newPos;
        },

        rotateLPosL: function() {
            let newPos = [0,0,0,0]
            if (this.activePos[0] + 10 + 10 == this.activePos[2]) {
                newPos[0] = this.activePos[0] + 10 - 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] - 10 + 1
                newPos[3] = this.activePos[3] - 10 - 10
            } else if (this.activePos[0] + 2 == this.activePos[2]) {
                newPos[0] = this.activePos[0] + 10 + 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] - 10 - 1
                newPos[3] = this.activePos[3] - 2
            } else if (this.activePos[0] - 10 - 10 == this.activePos[2]) {
                newPos[0] = this.activePos[0] - 10 + 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] + 10 - 1
                newPos[3] = this.activePos[3] + 10 + 10
            } else {
                newPos[0] = this.activePos[0] - 10 - 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] + 10 + 1
                newPos[3] = this.activePos[3] + 2
             }
             newPos = this.preventRotationOverlap(newPos)
             return newPos;
        },

        rotateLPosR: function() {
            let newPos = [0,0,0,0]
            if (this.activePos[0] + 10 + 10 == this.activePos[2]) {
                newPos[0] = this.activePos[0] + 10 + 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] - 10 - 1
                newPos[3] = this.activePos[3] - 2
            } else if (this.activePos[0] + 2 == this.activePos[2]) {
                newPos[0] = this.activePos[0] - 10 + 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] + 10 - 1
                newPos[3] = this.activePos[3] + 10 + 10

            } else if (this.activePos[0] - 10 - 10 == this.activePos[2]) {
                newPos[0] = this.activePos[0] - 10 - 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] + 10 + 1
                newPos[3] = this.activePos[3] + 2
            } else {
                newPos[0] = this.activePos[0] + 10 - 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] - 10 + 1
                newPos[3] = this.activePos[3] - 10 - 10
             }
             newPos = this.preventRotationOverlap(newPos)
             return newPos;
        },

        rotateJPosL: function() {
            let newPos = [0,0,0,0]
            if (this.activePos[0] + 10 + 10 == this.activePos[2]) {
                newPos[0] = this.activePos[0] + 10 - 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] - 10 + 1 
                newPos[3] = this.activePos[3] + 2
            } else if (this.activePos[0] + 2 == this.activePos[2]) {
                newPos[0] = this.activePos[0] + 10 + 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] - 10 - 1
                newPos[3] = this.activePos[3] - 10 - 10
            } else if (this.activePos[0] - 10 - 10 == this.activePos[2]) {
                newPos[0] = this.activePos[0] - 10 + 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] + 10 - 1
                newPos[3] = this.activePos[3] - 2
            } else {
                newPos[0] = this.activePos[0] - 10 - 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] + 10 + 1
                newPos[3] = this.activePos[3] + 10 + 10
             }
             newPos = this.preventRotationOverlap(newPos)
             return newPos;
        },

        rotateJPosR: function() {
            let newPos = [0,0,0,0]
            if (this.activePos[0] + 10 + 10 == this.activePos[2]) {
                newPos[0] = this.activePos[0] + 10 + 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] - 10 - 1
                newPos[3] = this.activePos[3] - 10 - 10
            } else if (this.activePos[0] + 2 == this.activePos[2]) {
                newPos[0] = this.activePos[0] - 10 + 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] + 10 - 1
                newPos[3] = this.activePos[3] - 2
            } else if (this.activePos[0] - 10 - 10 == this.activePos[2]) {
                newPos[0] = this.activePos[0] - 10 - 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] + 10 + 1
                newPos[3] = this.activePos[3] + 10 + 10
            } else {
                newPos[0] = this.activePos[0] + 10 - 1
                newPos[1] = this.activePos[1]
                newPos[2] = this.activePos[2] - 10 + 1
                newPos[3] = this.activePos[3] + 2
             }
             newPos = this.preventRotationOverlap(newPos)
             return newPos;
        },

        preventRotationOverlap: function(pos) {

            let left = 0
            let right = 0
            for (let i = 0; i < 4; i++) {
                if (pos[i] % 10 > 6 && pos[i] % 10 < 10)
                    right++
                else if (pos[i] % 10 >= 0 && pos[i] % 10 < 4)
                    left++
            }

            if (left > 0 && right > 0) {
                if (left > right) {

                    for (let i = 0; i < 4; i++) 
                        pos[i]++

                } else {

                    for (let i = 0; i < 4; i++) 
                        pos[i]--

                }

                pos = this.preventRotationOverlap(pos)

            }

            return pos

        },

        canMove: function(dir, pos = this.activePos) {
            if (this.status != "Pause")
                return false
            
            for (let i = 0; i < 4; i++) { 

                if (dir === "d") {
                    const nextBlock = this.blocks[pos[i] + 10]  
                    if (pos[i] + 10 >= 200 || (nextBlock.value > 0 && nextBlock.block != this.currentBlock)) {
                        return false
                    }
                } else if (dir === "l") {
                    const nextBlock = this.blocks[pos[i] - 1]
                    if ((pos[i] - 1) % 10 == 9 || (nextBlock.value > 0 && nextBlock.block != this.currentBlock)) {
                        return false    
                    }
                } else if (dir === "r") { 
                    const nextBlock = this.blocks[pos[i] + 1]
                    if ((pos[i] + 1) % 10 == 0 || (nextBlock.value > 0 && nextBlock.block != this.currentBlock)) {
                        return false
                    }
                } else if (dir === "rl" || dir === "rr") {
                    const nextBlock = this.blocks[pos[i]]
                    if (nextBlock.value > 0 && nextBlock.block != this.currentBlock) {
                        return false
                    }
                }
            } 
           
            return true
        },

        getTypeVal: function(type) {
            if (this.currentBlockType === "line")
                return 1
            else if (this.currentBlockType === "t")
                return 2 
            else if (this.currentBlockType === "s")
                return 3
            else if (this.currentBlockType === "z")
                return 4
            else if (this.currentBlockType === "l")
                return 5
            else if (this.currentBlockType === "j")
                return 6
            else return 7
        },

        nextBrick: function() {
            if (this.status == "Start")
                this.status = "Pause"

            if (this.upNext == null)
                this.upNext = Math.floor(Math.random() * 7)
            
            switch (this.upNext) {
                case 1:
                    this.lineBlock()
                    break
                case 2: 
                    this.tBlock()
                    break
                case 3:
                    this.sBlock()
                    break
                case 4:
                    this.zBlock()
                    break
                case 5:
                    this.lBlock()
                    break
                case 6:
                    this.jBlock()
                    break
                default:                    
                    this.squareBlock()
            }

            this.upNext = Math.floor(Math.random() * 7)

            this.renderNextBrick()

        },

        renderNextBrick: function () {
            let nextPos = []
            if (this.upNext === 1)
                nextPos = [1,4,7,10]
            else if (this.upNext === 2)
                nextPos = [6,7,4,8]
            else if (this.upNext === 3)
                nextPos = [6,7,4,5]
            else if (this.upNext === 4)
                nextPos = [3,4,7,8]
            else if (this.upNext === 5)
                nextPos = [4,7,10,11]
            else if (this.upNext === 7)
                nextPos = [3,4,6,7]
            else
                nextPos = [4,7,10,9]

            for (let i = 0; i < 12; i++) {
                this.upNextBlocks[i].value = 0
            }

            for (let i = 0; i < 4; i++) {
                const thisBlock = this.upNextBlocks[nextPos[i]]   
                thisBlock.value = this.upNext  
            }  
        },

        reset: function() {
            this.status = "Start"
            clearInterval(this.interval)
            this.blocks = [{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0},{block: 0, value: 0}
            ],
            this.interval = null
            this.activePos = null
            this.currentBlock = 0
            this.currentBlockType = null
            this.fallingSpeed = 1000
            this.level = 1
            this.popCount = 0
            this.score = 0
        },

        pause: function() {
            this.status = "Resume"
        },

        resume: function() {
            this.status = "Pause"
        },

        lineBlock: function() {
            this.fallingBlocks([3,4,5,6], "line")            
        },

        squareBlock: function() {
            this.fallingBlocks([4,5,14,15], "square")
        },

        tBlock: function() {
            this.fallingBlocks([4,5,15,6], "t")
        },

        sBlock: function() {
            this.fallingBlocks([14,15,5,6], "s")
        },

        zBlock: function() {
            this.fallingBlocks([4,5,15,16], "z")
        },

        lBlock: function() {
            this.fallingBlocks([4,14,24,25], "l")
        },

        jBlock: function() {
            this.fallingBlocks([4,14,24,23], "j")
        }

    },
    mounted() {
        window.addEventListener('keydown', (e)=>{
            var key = e.which || e.keyCode
            if (key === 37) {
                this.left()
            } else if (key == 39) {
                this.right()
            } else if (key == 40) {
                this.down()
            } else if (key == 16 || key == 65 || key == 38) {
                this.rotatel()
            } else if (key == 32 || key == 68) {
                this.rotater()
            } 
        });
    }
})


const start = document.getElementById("new-game");
start.addEventListener('click', function() {
    vm.reset()
    this.blur();
});

const pause = document.getElementById("pause");
pause.addEventListener('click', function() {

    if (vm.status == "Start") 
        vm.nextBrick()
    else if (vm.status == "Pause")
        vm.pause()
    else 
        vm.resume()

    this.blur();
});


