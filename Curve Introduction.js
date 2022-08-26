//qn 1
// Part 1
//unit_line_at is a curve


// Part 2

function vertical_line(pt, length) {
    function vert_line(t) {
        const x = x_of(pt);
        const y = y_of(pt) + length * t;
        return make_point(x, y);
    }
    return vert_line;
}

// Part 3
// vertical_line is a curve


// Part 4
draw_connected(200)(vertical_line(make_point(0.5,0.25),0.5));

//qn 2
function three_quarters(pt) {
    function mycircle(t) {
        return make_point(x_of(pt) + math_cos(2 * 3 / 4 * math_PI * t),
                          y_of(pt) + math_sin(2 * 3 / 4 * math_PI * t));
    }
    return mycircle;
}
// Test
draw_connected_full_view_proportional(200)(three_quarters(make_point(0.5, 0.25)));

//qn 3
function s_generator(pt) {
    function im_so_smart(t) {
        if (t <= 1 / 2) {
            return make_point(x_of(pt) + math_cos(3 * math_PI * t),
                          1 + y_of(pt) + math_sin(3 * math_PI * t));
        } else {
            return make_point(x_of(pt) + math_cos(2 * math_PI * (3 / 2 * t)),
                              y_of(pt) -1 -math_sin(2 * math_PI * (3 / 2 * t )));
        }
    }
    return im_so_smart;
}

// Test
draw_connected_full_view_proportional(200)(s_generator(make_point(0.5, 0.25)));