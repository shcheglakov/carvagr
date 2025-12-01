// Конфигурация для Vite приложения

// Значения по умолчанию (для разработки)
const DEFAULT_CONFIG = {
  BOT_TOKEN: '7899441316:AAE6vUY9bi3HsSujui2ZZ-BH_IG6oTN0pKE',
  CHAT_ID: '6905021486',
};

// Тип для конфигурации
export interface EnvConfig {
  BOT_TOKEN: string;
  CHAT_ID: string;
  IS_CONFIGURED: boolean;
}

// Функция для получения конфигурации
export const getEnvConfig = (): EnvConfig => {
  // В Vite используем import.meta.env
  const botToken = import.meta.env.VITE_BOT_TOKEN || DEFAULT_CONFIG.BOT_TOKEN;
  const chatId = import.meta.env.VITE_CHAT_ID || DEFAULT_CONFIG.CHAT_ID;
  
  return {
    BOT_TOKEN: botToken,
    CHAT_ID: chatId,
    IS_CONFIGURED: botToken !== DEFAULT_CONFIG.BOT_TOKEN && chatId !== DEFAULT_CONFIG.CHAT_ID
  };
};

// Экспортируем конфигурацию
export const envConfig = getEnvConfig();

// Вспомогательная функция для проверки конфигурации
export const checkEnvConfig = (): { isValid: boolean; errors: string[] } => {
  const config = getEnvConfig();
  const errors: string[] = [];
  
  if (!config.BOT_TOKEN || config.BOT_TOKEN === DEFAULT_CONFIG.BOT_TOKEN) {
    errors.push('BOT_TOKEN: Используется значение по умолчанию. Добавьте VITE_BOT_TOKEN в .env.local');
  }
  
  if (!config.CHAT_ID || config.CHAT_ID === DEFAULT_CONFIG.CHAT_ID) {
    errors.push('CHAT_ID: Используется значение по умолчанию. Добавьте VITE_CHAT_ID в .env.local');
  }
  
  // Показываем предупреждение в консоли в режиме разработки
  if (import.meta.env.DEV && errors.length > 0) {
    console.warn('⚠️ Предупреждение конфигурации:', errors);
    console.info('ℹ️ Создайте файл .env.local со следующими переменными:');
    console.info('VITE_BOT_TOKEN=ваш_токен_бота');
    console.info('VITE_CHAT_ID=ваш_id_чата');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};