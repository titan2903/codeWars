var steps = [
    function () {
        Bomb.diffuse(42)
    },
    function () {
        var diffuse = Bomb.diffuse
        while (Bomb.diffuse === diffuse) {
            Bomb.diffuse()
        }
    },
    function () {
        Bomb.diffuse(global.BombKey)
    },
    function () {
        global.diffuseTheBomb = function () {
            return true
        }

        Bomb.diffuse()
    },
    function () {
        Bomb.diffuse('3.14159')
    },
    function () {
        var d = new Date()
        d.setFullYear(d.getFullYear() - 4)
        Bomb.diffuse(d)
    },
    function () {
        Bomb.diffuse(Object.freeze({
            key: 43
        }))
    },
    function () {
        // Return 9.5 on first call, then 10.5
        Bomb.diffuse({
            x: 9.5,
            valueOf: function () {
                return this.x++
            }
        })
    },
    function () {
        // Return 0.5 on first call, then 1 forever
        Math.random = function () {
            Math.random = function () {
                return 1
            }
            return 0.5
        }

        Bomb.diffuse(42)

        // Unpatch
        delete Math.random
    },
    function () {
        // Compute sum
        Array.prototype.valueOf = function () {
            return this.reduce(function (a, b) {
                return a + b
            }, 0)
        }

        // Because it seems to bypass some check
        String.prototype.indexOf = function () {
            return 0
        }

        Bomb.diffuse('YOLO')

        // Unpatch
        delete Array.prototype.valueOf
        delete String.prototype.indexOf
    }
]

steps.forEach(function (step) {
    step()
})