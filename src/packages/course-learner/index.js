import CourseCurriculum from '@learnpress/course-curriculum';
import {Curriculum} from '@learnpress/course-curriculum';

const {element} = wp;

import Player from './player';

export function init(el, courseId, courseSettings, userSettings) {
    jQuery(function ($) {
        var $root = $(el);
        if ($root.length) {
            element.render(
                <Player
                    settings={ courseSettings }
                    courseId={ courseId }
                    initUserData={ userSettings }
                />
                , $root[0]);
        }
    });
}