export default function usePlayer() {
    return {
        player: {
            constructor: () => true,
            play: () => true,
            pause: () => true,
            resume: () => true,
            stop: () => true,
            getPlayState: () => true,
        }
    }
}