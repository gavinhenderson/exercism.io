=begin
Write your code for the 'Resistor Color Duo' exercise in this file. Make the tests in
`resistor_color_duo_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/resistor-color-duo` directory.
=end

# Black - Brown - Red - Orange - Yellow - Green - Blue - Violet - Grey - White



class ResistorColorDuo 
    @color_map = { 
        "black" => "0",
        "brown" => "1",
        "red" => "2",
        "orange" => "3",
        "yellow" => "4",
        "green" => "5", 
        "blue" => "6", 
        "violet" => "7", 
        "grey" => "8", 
        "white" => "9", 
    }
    
    def self.value(values = [])
        resister_value = ""

        first_color_as_number = @color_map[values[0]]
        second_color_as_number = @color_map[values[1]]

        if(first_color_as_number != nil and second_color_as_number != nil)
            resister_value = first_color_as_number + second_color_as_number
        end 

        resister_value.to_i
    end
end