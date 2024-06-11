const tg = window.Telegram.WebApp;
export const useTelegram = () => {
    const onClose = () => {
        tg.close()
    }
    return {
        onClose,
        tg,
        user: tg.initDataUnsafe?.user

    }
}