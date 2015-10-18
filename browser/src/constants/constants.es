import keyMirror from 'keymirror';

export default {
    ViewClasses: {
        APP_VIEW: 'app-view',
        TEST_VIEW: 'test_view',
        STATISTIC_VIEW: 'static_view',
        RESULT_VIEW: 'result_view',
    },
    ViewRoutes: {
        APP_VIEW: '/',
        TEST_VIEW: '/test/',
        STATISTIC_VIEW: '/statistic',
        RESULT_VIEW: '/result'
    },
    ComponentClasses: {
        LIST: 'test_list',
        INPUT: 'user_input',
        TEST_LIST_ITEM: 'test_list_item',
        BACKGROUND_IMAGE: 'background-image',
        CURRENT_TEST_STATISTICS: 'current_test_statistics'
    },
    Marks: {
        CHECKED: 'checked'
    },
    Labels: {
        WELCOME: 'Добро пожаловать',
        USERNAMES: 'Введите ваши ФИО:',
        GROUP: 'Введите ваш номер группы',
        TESTS_LIST: 'Список доступных тестов',
        START_TEST: 'Начать выполнение',
        CURRENT_TEST_STATISTICS_CURRENT_TIME: 'Прошедшее время',
        CURRENT_TEST_STATISTICS_LEAVE_TIME: 'Оставшееся время',
        CURRENT_TEST_STATISTICS_CORRECT_ANSWERSCOUNT: 'Количество верных ответов',
        CURRENT_TEST_STATISTICS_DISCORRECT_ANSWERS_COUNT: 'Количество неверных ответов',
        CURRENT_TEST_STATISTICS_QUESTIONS_COUNT: 'Количество вопросов'
    },
    ImageStatus: keyMirror({
        PENDING: null,
        LOADED: null,
        FAILED: null
    }),
    DEFAULT_IMAGE_URL: '../browser/src/tests/images/',
    TimeInterval: 1000,
    DisplayAllStatistic: true,
    TestStatus: keyMirror({
        INIT: null,
        PROCESS: null,
        FINISHED: null
    })
};
