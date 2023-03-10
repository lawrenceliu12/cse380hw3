import GameEvent from "../../../Wolfie2D/Events/GameEvent";
import { HW3Events } from "../../HW3Events";
import { PlayerStates, PlayerAnimations } from "../PlayerController";
import PlayerState from "./PlayerState";

export default class Taking_Damage extends PlayerState {

    public onEnter(options: Record<string, any>): void{
        this.owner.animation.play(PlayerAnimations.TAKING_DAMAGE, false) 
    }

    public handleInput(event: GameEvent): void { }

    public update(deltaT: number): void {
        if(!this.owner.animation.isPlaying(PlayerAnimations.TAKING_DAMAGE)){
            if(this.parent.health > 0){
                this.finished(PlayerStates.IDLE);
            }
            else{
                this.finished(PlayerStates.DYING);
            }
        }
    }

    public onExit(): Record<string, any> { 
        this.owner.animation.stop();
		return {};
    }
}