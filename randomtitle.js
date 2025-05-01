setInterval(() => {
        const str = 'abcdefghijklmnop1234567890!@#$%^&*()';
        function randomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        document.getElementById('title').textContent = randomString(Math.floor(Math.random() * 10) + 1) + str[Math.floor(Math.random() * str.length)] + randomString(Math.floor(Math.random() * 10) + 1);
    }, 1000)
