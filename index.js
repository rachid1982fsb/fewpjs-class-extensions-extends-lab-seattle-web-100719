class Polygon {
    constructor(arrayPol){
        this.arrayPol = arrayPol;
        // this.countSides = this.arrayPol.length
        // this.perimeter = perimeter()
    }

    get countSides(){
        return this.arrayPol.length
    }

    get perimeter(){
        let total = this.arrayPol.reduce(function(total, n){return total + n},0)
        return total 
    }

}

class Triangle extends Polygon{
    get isValid(){
        if (this.arrayPol[0]+this.arrayPol[1]< this.arrayPol[2] ||this.arrayPol[0]+this.arrayPol[2]< this.arrayPol[1] || this.arrayPol[1]+this.arrayPol[2]< this.arrayPol[0]){
            return false
        }
        else{
            return true
        }
    }
}

class Square extends Polygon{

    get isValid(){
        let validd = true
        const firstElement = this.arrayPol[0]
        this.arrayPol.forEach(function(e){
            if(e != firstElement){
                validd = false
            }
        })
        return validd
    }

    get area(){
        return this.arrayPol[0]*this.arrayPol[0]
    }

}