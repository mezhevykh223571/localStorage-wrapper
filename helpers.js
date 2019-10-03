import gutil from 'gulp-util';
import notifier from 'node-notifier';
import path from 'path';

export const liveEnv = process.argv.indexOf('--live') !== -1;

export function handleError(error) {
  const currentPath = process.cwd();

  notifier.notify({
    icon: path.resolve(`${currentPath}/assets/error-logo.png`),
    title: `Gulp error in ${error.plugin}`,
    message: error.message,
  });

  gutil.log(
    gutil.colors.red(
      `${gutil.colors.bold.underline(`Error (${error.plugin})`)}: ${error.message}`,
    ),
  );

  this.emit('end');
}
