import ListProject from "./ListProject";

export default function BoxProject() {
    
    return(
        <div className="mt-0 px-10">
            <ListProject
                text="Tray Gold"
                imgDetail1="/image/project tray/tray gold/tray gold 1.png"
                imgDetail2="/image/project tray/tray gold/tray gold 2.png"
                imgDetail3="/image/project tray/tray gold/tray gold 3.png"
                imgDetail4="/image/project tray/tray gold/tray gold 4.png"
                imgDetail5="/image/project tray/tray gold/tray gold 5.png"
                imgDetail6="/image/project tray/tray gold/tray gold 6.png"
            />
            
            <ListProject
                text="Tray Putih"
                imgDetail1="/image/project tray/tray putih/tray putih 1.png"
                imgDetail2="/image/project tray/tray putih/tray putih 2.png"
                imgDetail3="/image/project tray/tray putih/tray putih 3.png"
                imgDetail4="/image/project tray/tray putih/tray putih 4.png"
                imgDetail5="/image/project tray/tray putih/tray putih 5.png"
                imgDetail6="/image/project tray/tray putih/tray putih 6.png"
            />
        </div>
    );
}