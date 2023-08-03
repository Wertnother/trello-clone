import { ID, storage } from "@/appwrite";

const uploudImage = async (file: File) => {
    if (!file) return;

    const fileUploaded = await storage.createFile(
        "649d93957b2be048f4e8",
        ID.unique(),
        file
    );

    return fileUploaded;
};

export default uploudImage;