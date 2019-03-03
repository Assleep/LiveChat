export class Cmessage{

	nick: any;

	constructor( public title: string, 
						person: boolean = true,
						name: any ){
		this.nick = name;
	}
}