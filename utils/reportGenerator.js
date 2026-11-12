const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function generateAllureReport() {

    const now = new Date();

    const timestamp =
        `${now.getFullYear()}-` +
        `${String(now.getMonth() + 1).padStart(2, '0')}-` +
        `${String(now.getDate()).padStart(2, '0')}_` +
        `${String(now.getHours()).padStart(2, '0')}-` +
        `${String(now.getMinutes()).padStart(2, '0')}-` +
        `${String(now.getSeconds()).padStart(2, '0')}`;

    const desktopPath = path.join(
        require('os').homedir(),
        'Desktop',
        'Allure-reports'
    );

    if (!fs.existsSync(desktopPath)) {
        fs.mkdirSync(desktopPath, { recursive: true });
    }

    const reportFolder = path.join(
        desktopPath,
        `AllureReport_${timestamp}`
    );

    execSync(
        `allure generate allure-results -o "${reportFolder}" --clean`,
        { stdio: 'inherit' }
    );

    console.log(`Report Generated : ${reportFolder}`);

    return reportFolder;
}

module.exports = { generateAllureReport };