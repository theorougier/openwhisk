function main(args) {
    const originalNumber = args.originalNumber || 0;
    const number = args.number || 0;
    console.log(`Le nombre original est ${originalNumber}. Le nombre final est ${number}.`);
    return { message: `Le nombre original est ${originalNumber}. Le nombre final est ${number}.`, originale: originalNumber, resultat: number};
}
