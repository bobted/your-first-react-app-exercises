//  a class in ES is not like you'd think of a class in C# or Java.
//  It is "syntactical sugar" - this class gets turned into a normal ES object.
//  We won't talk much about the differences between this and C#/Java.
//   For now, know that this thing will mostly act like you'd expect
//   an OOP class to act in your code.

export class ThingOne {
    thingOneProperty = 1;
}

export class ThingTwo extends ThingOne {
    thingTwoProperty = 2;

    addItUp() {
        return this.thingTwoProperty + this.thingOneProperty;
    }

    addItUp2 = () => this.thingOneProperty + this.thingTwoProperty;
}
