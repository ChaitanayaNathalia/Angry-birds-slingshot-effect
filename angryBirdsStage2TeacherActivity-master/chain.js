class Chain {
    constructor(bodyA,pointB) {
        var Options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.Chain = Constraint.create(Options)
        World.add(world,this.Chain)
        this.pointB = pointB;
    }
    display() {
        if (this.Chain.bodyA) {
        strokeWeight(4)
        line (this.Chain.bodyA.position.x,this.Chain.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
    }
    fly() {
        this.Chain.bodyA = null;
    }
}