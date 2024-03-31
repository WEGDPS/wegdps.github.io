import Spinner from "../components/Spinner.js";

export default {
    components: {
        Spinner,
    },
    data: () => ({
        loading: true,
    }),
    template: `
        <main v-if="loading" class="surface">
            <Spinner></Spinner>
        </main>
        <main v-else class="auth-page">
            <div class="auth-form">
                <form action="">
                    <h1 class="type-headline-lg">Войти</h1>
                    <div class="auth-input">
                        <input type="text" placeholder="Логин" required>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="auth-input">
                        <input type="password" placeholder="Пароль" required>
                        <i class='bx bxs-lock-alt'></i>
                    </div>
                    <div class="auth-remember">
                        <label><input type="checkbox"> Запомнить</label>
                        <a href="#">Забыли пароль?</a>
                    </div>
                    <button type="submit" class="auth-loginbtn">Войти</button>
                    <div class="register-link">
                        <p>У вас нет аккаунта? <a href="#">Зарегистрироваться</a></p>
                    </div>
                </form>
            </div>
        </main>
    `,
    async mounted() {
        this.loading = false;
    }
};
