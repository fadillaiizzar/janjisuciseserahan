import ListProject from "./ListProject";

export default function BoxProject() {
    
    return(
        <div className="mt-0 px-10">
            <ListProject
                text="Tray Gray"
                imgDetail1="/image/hero.png"
                imgDetail2="/image/ringbox.png"
            />
            <ListProject
                text="Tray Blue"
                imgDetail="/image/git.png"
            />
        </div>
    );
}