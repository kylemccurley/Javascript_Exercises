require 'io/console'

class Node
  attr_reader :data
  attr_accessor :next
  def initialize(data, next_node = nil)
    @data = data
    @next = next_node
  end
end

class LinkedList
  def initialize
    @head = nil
  end
  
  def push(data)
    if @head.nil?
      @head = Node.new(data)
      return
    end
    
    current = @head
    # Find the tail of the list
    # Insert a node to the end of the linked list
      # Set the next property of the end node to the
      # new node with the data
    
    while (current.next != nil)
      current = current.next
    end
  
    current.next = Node.new(data)
  end
end

class Main
  def run
    loop do
      puts "Welcome to the Linked List. Please select an option: "
      puts "- New List (n)"
      response = STDIN.getch.downcase
      if response == 'n'
        createList()
      end
    end
  end
  
  def createList()
    list = LinkedList.new()
    puts 'List created...'
    puts 'Would you like to:'
    puts '- Add an item (+).'
    puts '- Remove an item (-).'
    puts '- Return to the main page (Space)'
    response = STDIN.getch
  
    if response == '+'
      puts 'What would you like to store?'
      data = gets.chomp.to_i
      list.push(data)
      puts 'Data Stored. Would you like to view the list?'
    end
  end
end

Main.new.run
