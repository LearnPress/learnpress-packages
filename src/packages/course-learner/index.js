import CourseCurriculum from '@learnpress/course-curriculum';
import {Curriculum} from '@learnpress/course-curriculum';

export * from './components';
export {PlayerConsumer} from './player';
const {element} = wp;

import Player from './player';

export function init(el, courseId, courseSettings, userSettings) {
    jQuery(function ($) {
        setTimeout(() => {
            var $root = $(el);
            if ($root.length) {

                LP.core.initHooks();

                element.render(
                    <Player
                        settings={ courseSettings }
                        courseId={ courseId }
                        initUserData={ userSettings }
                    />
                    , $root[0]);
            }
        }, 1)

    });
}